<?php
namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CreateUserCommand extends Command
{
    private $entityManager;
    private $passwordHasher;

    public function __construct(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher)
    {
        $this->entityManager = $entityManager;
        $this->passwordHasher = $passwordHasher;
        parent::__construct();
        $this->setName(self::$defaultName);
    }

    protected static $defaultName = 'app:create-user';

    protected function configure()
    {
        $this->setDescription('Create a new user.')
            ->addArgument('email', InputArgument::REQUIRED, 'The email of the user')
            ->addArgument('password', InputArgument::REQUIRED, 'The password of the user')
            ->addArgument('roles', InputArgument::OPTIONAL, 'The roles of the user', 'ROLE_USER');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');
        $roles = explode(',', $input->getArgument('roles'));

        $user = new User();
        $user->setEmail($email);
        $encodedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($encodedPassword);
        $user->setRoles($roles);

        // Persist the user to the database
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $output->writeln('User created successfully!');

        return Command::SUCCESS;
    }
}
