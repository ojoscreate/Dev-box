// See https://aka.ms/new-console-template for more information

using System;
namespace Start
{
    public class StudentName
    {
        public void Student()
        {
            Console.WriteLine("How many student attended today?");
            int count;
            count = int.Parse(Console.ReadLine());
            String[] students = new string[count];
            for (int i = 0; i < students.Length; i++)
            {
                Console.WriteLine("Student Name");
                students[i] = Console.ReadLine();
            }
            Console.WriteLine("Names of Student Attended");
            for (int i = 0; i < count; i++)
            {
                Console.WriteLine(students[i]);
            }
        }
    }

    class Start
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to the Game Development Program!, With c#");
            // Additional setup code can be added here
            Console.WriteLine("Hello , User!");
            Console.WriteLine("What is your name?");
            string name = Console.ReadLine();
            Console.WriteLine("What is your age? ");
            int age = int.Parse(Console.ReadLine());
            Console.WriteLine($"Hello {name}, you are {age} years old");
            if (age < 18)
            {
                Console.WriteLine($"{name}, you are too young for this game, exit now");
            }
            else
            {
                Console.WriteLine($"{name}, welcome to Joblise");
            }

            StudentName myfunction = new StudentName();

            myfunction.Student();
        }
    }
}