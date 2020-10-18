let mass = prompt(" your weight in kg ");
let height = prompt(" your height in cm");
BMI = mass/(height*height);
if (BMI<16)
{
    alert(" Severely underweight");
}
else if (16.5<BMI<18)
{
    alert(" Underweight");
}
else if (18.5<BMI<25)
{
    alert(" Normal");
}
else if (25<BMI<30)
{
    alert(" Overweight");
}
else if (BMI>30)
{
    alert(" Obese");
}