import React from 'react'
import Layout from '../../components/layout/Layout'
import placement1 from '../../assets/blog/placement-question.jpg'
import CodeSnippit from '../../components/CodeSnippit';
const PlacementQuestion = () => {
  return (
    <>
      <Layout title="Wipro Talent Next Milestone">
        <div className="vce-container">
          <h1>Wipro Talent Next Milestone All Coding Question Cheatsheet</h1>
          <img src={placement1} alt="Placement" />
          <div className="extension-container">
            <h3>Question-1: Find PIN</h3>
            <p>
              You are at Level-1 of a Maths game. <br />
              You are provided with 4 numbers: input1, input2, input3 and input4
              and are expected to find a secret PIN. The three numbers input1,
              input2 and input3 are four digit numbers
            </p>
            <p>{`within the range >=1000 and <=9999. i.e.`}</p>
            <p>{`1000 <= input1 <= 9999`}</p>
            <p>{`1000 <= input2 <= 9999`}</p>
            <p>{`1000 <= input3 <= 9999`}</p>
            <p>input4 is a positive integer number.</p>
            <p>
              PIN = ((largest digit in input1) x (largest digit in input2) x
              (largest digit in input3)) + input4
            </p>
            <p>Example - If input1 = 3521, input2-2452, input3=1352, and</p>
            <p>input4-38, then PIN = (5 x 5 x5) + 38 = 163</p>
            <p>Assuming that the 4 numbers are passed to the given function,</p>
            <p>Assuming that the 4 numbers are passed to the given function,</p>
            <p>Complete the function to find and return the PIN</p>
            <CodeSnippit
              type="java"
              code={`
    public class PinFinder {
    public static int findPin(int input1, int input2, int input3, int input4) {
        int largestDigit1 = findLargestDigit(input1);
        int largestDigit2 = findLargestDigit(input2);
        int largestDigit3 = findLargestDigit(input3);

        int pin = (largestDigit1 * largestDigit2 * largestDigit3) + input4;

        return pin;
    }

    private static int findLargestDigit(int number) {
        int largestDigit = 0;

        while (number > 0) {
            int digit = number % 10;
            if (digit > largestDigit) {
                largestDigit = digit;
            }
            number /= 10;
        }

        return largestDigit;
    }

    public static void main(String[] args) {
        int input1 = 3521;
        int input2 = 2452;
        int input3 = 1352;
        int input4 = 38;

        int pin = findPin(input1, input2, input3, input4);
        System.out.println("PIN: " + pin);
    }
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>
              Question-2: Find sum of all prime numbers in the array, except the
              smallest
            </h3>
            <p>
              prime number: Madhav has been assigned the task of finding the sum
              of all prime numbers in a given array, except the smallest prime
              number in the array. Madhav approaches you to help him do this by
              writing a program. Given an array of numbers, you are expected to
              find the sum of all <br />
              prime numbers in the given array. You must however exclude the
              smallest prime number while performing this addition -
            </p>
            <p>For Example</p>
            <p>
              If input1 (10,41,18,50,43,31,29,25,59,96,67) representing the
              given array and input2 = 11 representing the number of elements in
              the array. then the expected output is 241, which is the sum all
              prime numbers in this array except the smallest prime number 29.
            </p>
            <p>
              Explanation: The prime numbers in this array are 41, 43, 31, 29,
              59 and 67.
            </p>
            <p>The smallest prime number in this array is 29.</p>
            <p>
              So, let us leave out 29 and add all the other prime numbers to get
              the
            </p>
            <p>output. Therefore, output = 41+43+31+59+67 = 241</p>
            <p>Special conditions to be taken care:</p>
            <p>
              Note: If the array does NOT contain any prime number, the output
              should be the sum of all numbers in the array except the lowest
              number. For example, If input1=[10,20,30,40) and input2 = 4
            </p>
            <CodeSnippit
              type="java"
              code={`
    public class SumOfPrimes {
    public static int getSumOfPrimes(int[] array) {
        int smallestPrime = Integer.MAX_VALUE;
        int sum = 0;

        for (int num : array) {
            if (isPrime(num)) {
                if (num < smallestPrime) {
                    smallestPrime = num;
                }
                sum += num;
            }
        }

        sum -= smallestPrime;

        if (sum == 0) {
            sum = sumOfArray(array) - smallestPrime;
        }

        return sum;
    }

    private static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    private static int sumOfArray(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] array = {10, 41, 18, 50, 43, 31, 29, 25, 59, 96, 67};
        int sumOfPrimes = getSumOfPrimes(array);
        System.out.println("Sum of prime numbers (except the smallest) in the array: " + sumOfPrimes);
    }
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>
              Question-3: Find sum of all prime numbers in the array, except the
              smallest
            </h3>
            <p>
              Danielle was assigned the task of finding the T-Value by her
              Manager. She was given a function called find_tvalue and was
              provided with 3 integer numbers input1,input2 and input3. She is
              expected to return an integer value by following the two rules:
            </p>
            <p>Rule1)</p>
            <p>There are four cases possible based on the value of input2</p>
            <p>Case 1:</p>
            <p>if input2 is an even prime number then</p>
            <p>
              Calculate t = input1"input1 *(sum of first input2 number of
              primenumbers).
            </p>
            <p>Case 2:</p>
            <p>
              if input2 is an odd prime number then Calculate t = input input2
              (sum of first input3 number of prime numbers)
            </p>
            <p>Case 3:</p>
            <p>if input2 is an even composite number then</p>
            <p>
              Calculate t = input3 input3*(sum of first (input2-input3) number
              of prime numbers)
            </p>
            <p>Case 4:</p>
            <p>
              if input2 is an odd composite number then Calculate t = sum of
              first (input1+input2+input3) prime numbers is?
            </p>
            <CodeSnippit
              type="java"
              code={`
    public class TCalculator {

    public static int find_tvalue(int input1, int input2, int input3) {
        if (isPrime(input2)) {
            if (input2 % 2 == 0) {
                return input1 * input1 * sumOfFirstNPrimes(input2);
            } else {
                return input1 * input2 * sumOfFirstNPrimes(input3);
            }
        } else {
            if (input2 % 2 == 0) {
                return input3 * input3 * sumOfFirstNPrimes(input2 - input3);
            } else {
                return sumOfFirstNPrimes(input1 + input2 + input3);
            }
        }
    }

    // Helper method to check if a number is prime
    private static boolean isPrime(int num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 == 0 || num % 3 == 0) return false;

        for (int i = 5; i * i <= num; i += 6) {
            if (num % i == 0 || num % (i + 2) == 0) return false;
        }
        return true;
    }

    // Helper method to calculate the sum of the first n prime numbers
    private static int sumOfFirstNPrimes(int n) {
        int sum = 0;
        int num = 2;
        int count = 0;

        while (count < n) {
            if (isPrime(num)) {
                sum += num;
                count++;
            }
            num++;
        }
        return sum;
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(find_tvalue(2, 3, 5)); // Case 2: odd prime input2=3
        System.out.println(find_tvalue(2, 4, 5)); // Case 1: even prime input2=4
        System.out.println(find_tvalue(3, 6, 4)); // Case 4: odd composite input2=6
        System.out.println(find_tvalue(3, 8, 4)); // Case 3: even composite input2=8
    }
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-4: Encoding Three Strings</h3>
            <p>
              Anand was assigned the task of coming up with an encoding
              mechanism for any given three strings. He has come up with the
              below plan.
            </p>
            <p>
              STEP ONE: Given any three strings, break each string into 3 parts
              each.
            </p>
            <p>
              the three strings are as below- For example - <br /> If
              Input1="John
              <br />
              Input2= "Johny <br />
              Input3= "Janardhan
            </p>
            <p>
              "John" should be split into "J", "oh", "n" as the FRONT, MIDDLE
              and END parts respectively.
            </p>
            <p>
              "Johny" should be split into "Jo", "h", "ny" as the FRONT, MIDDLE
              and END parts respectively.
            </p>
            <p>
              "Janardhan" should be split into "Jan", "ard", "han" as the FRONT,
              MIDDLE and END parts respectively.
            </p>
            <p>
              ie, if the no. of characters in the string are in multiples of 3,
              then each split-part will contain equal no. of characters, as seen
              in the example
            </p>
            <p>
              of Janardhan" If the no. of characters in the string are NOT in
              multiples of 3, and if there is one character more than multiple
              of 3, then the middle part will get the extra character, as seen
              in the example of "John"
            </p>
            <p>
              If the no. of characters in the string are NOT in multiples of 3
            </p>

            <CodeSnippit
              type="java"
              code={`public class StringEncoder {

    public static String[] encodeStrings(String input1, String input2, String input3) {
        String[] encodedStrings = new String[3];
        encodedStrings[0] = encodeString(input1);
        encodedStrings[1] = encodeString(input2);
        encodedStrings[2] = encodeString(input3);
        return encodedStrings;
    }

    private static String encodeString(String input) {
        int length = input.length();
        int partSize = length / 3;
        int extraChar = length % 3;

        String front = input.substring(0, partSize);
        String middle = input.substring(partSize, partSize * 2 + extraChar);
        String end = input.substring(partSize * 2 + extraChar);

        return front + " " + middle + " " + end;
    }

    public static void main(String[] args) {
        String input1 = "John";
        String input2 = "Johny";
        String input3 = "Janardhan";

        String[] encodedStrings = encodeStrings(input1, input2, input3);

        for (String encodedString : encodedStrings) {
            System.out.println(encodedString);
        }
    }
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-5: Find Key</h3>
            <p>
              {`You are provided with 3 numbers: input1, input2 and input3. Each of these are four digit numbers within the range >= 1000 and <=9999`}
            </p>
            <p>i.e.</p>
            <p>{`1000 <= input1 <= 9999`}</p>

            <p>{`1000<= input2 <= 9999`}</p>
            <p>{`1000 <= input3 <= 9999`}</p>
            <p>
              You are expected to find the Key using the below formula-
              <br />
              Key = (Hundreds digit of input1 x Tens digit of input2) - (Largest
              digit of input3)
              <br />
              For eg. if input1 = 3521, input2=2452, input3-1352, then Key = (5
              x 5) -5=20
            </p>
            <p>
              Assuming that the 3 numbers are passed to the given function,
              Complete the function to find and return the Key.
            </p>
            <CodeSnippit
              type="java"
              code={`
    public int findKey(int input1, int input2, int input3) {
    int hundredsDigitInput1 = (input1 / 100) % 10;
    int tensDigitInput2 = (input2 / 10) % 10;
    
    int largestDigitInput3 = 0;
    int tempInput3 = input3;
    while (tempInput3 > 0) {
        int digit = tempInput3 % 10;
        largestDigitInput3 = Math.max(largestDigitInput3, digit);
        tempInput3 /= 10;
    }
    
    int key = (hundredsDigitInput1 * tensDigitInput2) - largestDigitInput3;
    return key;
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-6: StringConcatenation</h3>
            <p>
              Given 2 strings input1 & input2, • Concatenate both the strings
              <br />
              Remove duplicate alphabets & white spaces. Arrange the alphabets
              in descending order.
            </p>
            <p>
              Assumption 1: There will either be alphabets, white spaces or null
              in both the inputs.
            </p>
            <p>Assumption 2: Both inputs will be in lower case.</p>

            <p>
              Note: If any one of the input is empty or null, output should be
              "null".
            </p>
            <p>
              <b>Example 1:</b>
            </p>
            <p>
              <b>Input 1:</b>
              apple
              <br />
              <b>Input 2 </b> orange
              <br />
              <b>Output: </b>
              rponlgea <br />
              <b>Example 2: </b> <br />
              <b>Input 1: </b> fruits <br />
              <b>Input 2: </b> are good <br />
              <b>Output:</b> utsroigfeda
            </p>

            <CodeSnippit
              type="java"
              code={`
    public class StringConcatenation {

    public static String concatenateAndSort(String input1, String input2) {
        if (input1 == null || input2 == null || input1.isEmpty() || input2.isEmpty()) {
            return "null";
        }

        String concatenated = input1 + input2;
        StringBuilder result = new StringBuilder();

        for (char ch = 'z'; ch >= 'a'; ch--) {
            if (concatenated.indexOf(ch) != -1) {
                result.append(ch);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        String input1 = "apple";
        String input2 = "orange";
        System.out.println(concatenateAndSort(input1, input2)); // Output: rponlgea

        input1 = "fruits";
        input2 = "are good";
        System.out.println(concatenateAndSort(input1, input2)); // Output: utsroigfeda

        input1 = "";
        input2 = "";
        System.out.println(concatenateAndSort(input1, input2)); // Output: null
    }
}

`}
            />
            <hr />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default PlacementQuestion