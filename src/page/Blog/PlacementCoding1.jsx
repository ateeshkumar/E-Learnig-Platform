import React from 'react';
import Layout from '../../components/layout/Layout';
import CodeSnippit from '../../components/CodeSnippit';
import placement1 from '../../assets/blog/placement-question.jpg';
const PlacementCoding1 = () => {
  return (
    <>
      <Layout title="Placement Coding Queston">
        <div className="vce-container">
          <h1>Placement Coding Question - 2023 Cheatsheet</h1>
          <img src={placement1} alt="Placement" />
          <div className="extension-container">
            <h3>Question-1:</h3>
            <p>
              A cold storage company has N storage units for various products
              The company has received N orders that must be preserved at
              respective N temperatures inside the storage units. The company
              manager wishes to identify which products must be preserved at
              negative temperatures.
            </p>
            <p>
              Write an algorithm to help the manager find the number of products
              that have negative temperature storage requirements.
            </p>
            <p>
              <b>Input</b>
            </p>
            <p>
              The first line of the input consists of an integer numOfProducts
              representing the number of products (N).
            </p>
            <p>
              The second line consists of N space- separated integers -
              temperature, temperature a ....temperature-1 representing the
              temperatures at which the products must be preserved in the
              storage units.
            </p>
            <p>
              <b>Output</b>
            </p>
            <p>
              Print an integer representing the number of products that must be
              preserved at negative temperatures
            </p>
            <CodeSnippit
              type="C++"
              code={`
#include <iostream>

int countProductsAtNegativeTemp(int numOfProducts, int temperatures[]) {
    int count = 0;
    for (int i = 0; i < numOfProducts; ++i) {
        if (temperatures[i] < 0) {
            count++;
        }
    }
    return count;
}

int main() {
    int numOfProducts;
    std::cin >> numOfProducts;
    
    int temperatures[numOfProducts];
    for (int i = 0; i < numOfProducts; ++i) {
        std::cin >> temperatures[i];
    }
    
    int result = countProductsAtNegativeTemp(numOfProducts, temperatures);
    std::cout << result << std::endl;
    
    return 0;
}
    `}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-2:</h3>
            <p>
              Martin is a commander in the army. An undercover agent shares some
              secret information with him. The secret information consists of a
              text and the name of a terrorist. With the given information,
              Martin needs to find the number of terrorists who are going to
              attack the army base. The agent gave Martin a hint that the number
              of terrorists is the number of times the terrorist's name occurs
              in the text.
            </p>
            <p>
              Write an algorithm to help Martin find the number of terrorists
              who are going to attack the army base.
            </p>
            <p>
              <b>Input</b>
            </p>
            <p>
              The first line of the input consists of a string text,
              representing the text portion of the secret information shared by
              the agent.
            </p>
            <p>
              The second line consists of a string name representing the name of
              the terrorist.
            </p>
            <p>
              <b>Output</b>
            </p>
            <p>
              Print an integer representing the number of terrorists who are
              going to attack the army base. If no occurrence of name is found
              in text then print 0.
            </p>
            <CodeSnippit
              type="C++"
              code={`
#include <iostream>
#include <string>

int countTerrorists(const std::string& text, const std::string& name) {
    int count = 0;
    size_t pos = 0;
    while ((pos = text.find(name, pos)) != std::string::npos) {
        count++;
        pos += name.length();
    }
    return count;
}

int main() {
    std::string text, name;
    std::getline(std::cin, text);
    std::getline(std::cin, name);
    
    int result = countTerrorists(text, name);
    std::cout << result << std::endl;
    
    return 0;
}
`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-3:</h3>
            <p>
              You are required to fix all logical errors in the given code. You
              can click on Compile & Run anytime to check the
              compilation/execution status of the program. You can use cout to
              debug your code. The submitted code should be
              logically/syntactically correct and pass all testcases.
            </p>
            <p>
              Code Approach: For this question. you will need to correct the
              given implementation. We do not expect you to modify the approach
              or incorporate any additional library methods.
            </p>
            <p>
              The function/method countOccurrence return an integer representing
              the count of occurrences of given value in the input list.
            </p>
            <p>
              The function/method countOccurrence accepts three arguments - len,
              an integer representing the size of the input list, value, an
              integer representing the given value and arr, a list of integers,
              representing the input list.
            </p>

            <p>
              countOccurrence compiles successfully but fails to return the
              desired result for some test cases due to logical errors. Your
              task is to
            </p>
            <CodeSnippit
              type="C++"
              code={`
#include <iostream>

int countOccurrence(int len, int value, int arr[]) {
    int count = 0;
    for (int i = 0; i < len; ++i) {
        if (arr[i] == value) {
            count++;
        }
    }
    return count;
}

int main() {
    int len, value;
    std::cin >> len >> value;
    
    int arr[len];
    for (int i = 0; i < len; ++i) {
        std::cin >> arr[i];
    }
    
    int result = countOccurrence(len, value, arr);
    std::cout << result << std::endl;
    
    return 0;
}

    `}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-4:</h3>
            <p>
              The Tunction/metnog median accepts two arguments-size and
              inputList, an integer representing the length of a list and a list
              of integers, respectively.
            </p>
            <p>
              The function/method median is supposed to calculate and return an
              integer representing the median of elements in the input list.
              However, the function/method median works only for odd-length
              lists because of incomplete code.
            </p>
            <p>
              You must complete the code to make it work for even-length lists
              as well. A couple of other functions/methods are available, which
              you are supposed to use inside the function/method median to
              complete the code. Helper Description
            </p>
            <p>
              The following function is used to represent a quick_select and is
              already implemented in the default code (Do not write this
              definition again in your code): int quick select(int inputList,
              /*It calculate the median val This can be called as - quick select
            </p>
            <CodeSnippit
              type="C++"
              code={`
#include <iostream>
#include <algorithm>

int quickSelect(int inputList[], int start, int end, int k) {
    // This function uses quick select algorithm to find the k-th element in the list
    // and returns its value.
    if (start == end) {
        return inputList[start];
    }
    
    int pivotIndex = start + rand() % (end - start + 1);
    std::swap(inputList[pivotIndex], inputList[end]);
    
    int pivot = inputList[end];
    int i = start;
    
    for (int j = start; j < end; ++j) {
        if (inputList[j] < pivot) {
            std::swap(inputList[i], inputList[j]);
            i++;
        }
    }
    
    std::swap(inputList[i], inputList[end]);
    
    int numSmaller = i - start + 1;
    
    if (k == numSmaller) {
        return inputList[i];
    } else if (k < numSmaller) {
        return quickSelect(inputList, start, i - 1, k);
    } else {
        return quickSelect(inputList, i + 1, end, k - numSmaller);
    }
}

int median(int size, int inputList[]) {
    // Calculate the median of elements in the input list using quick select.
    if (size % 2 == 1) {
        // For odd-length list, the median is the (size/2 + 1)th element.
        return quickSelect(inputList, 0, size - 1, size / 2 + 1);
    } else {
        // For even-length list, the median is the average of the two middle elements.
        int median1 = quickSelect(inputList, 0, size - 1, size / 2);
        int median2 = quickSelect(inputList, 0, size - 1, size / 2 + 1);
        return (median1 + median2) / 2;
    }
}

int main() {
    int size;
    std::cin >> size;
    
    int inputList[size];
    for (int i = 0; i < size; ++i) {
        std::cin >> inputList[i];
    }
    
    int result = median(size, inputList);
    std::cout << result << std::endl;
    
    return 0;
}

`}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>Question-5:</h3>
            <p>
              You are given a predefined structure/class Point and also a
              collection of related functions/methods that can be used to
              perform some basic operations on the structure.
            </p>
            <p>
              The function/method is Right Triangle returns an integer '1', if
              the points make a right-angled triangle otherwise return '0'. The
              function/method isRightTriangle three points - P1, P2, P3
              representing the input points.
            </p>
            <p>
              You are supposed to use the given function to complete the code of
              the function/method is Right Triangle so that it passes all test
              cases.
            </p>
            <p>
              Helper Description The following class is used to represent point
              and is already implemented in the default code (Do not write these
              definitions again in your code):
            </p>
            <CodeSnippit
              type="C++"
              code={`
#include <iostream>
#include <cmath> // For the pow() and sqrt() functions

// Define the Point class
class Point {
public:
    int x, y;
};

// Function to calculate the square of the distance between two points
int distanceSquared(Point P1, Point P2) {
    return pow((P1.x - P2.x), 2) + pow((P1.y - P2.y), 2);
}

// Given function to check if points form a right-angled triangle
int RightTriangle(Point P1, Point P2, Point P3) {
    int side1Squared = distanceSquared(P1, P2);
    int side2Squared = distanceSquared(P2, P3);
    int side3Squared = distanceSquared(P1, P3);

    int sidesSquared[3] = {side1Squared, side2Squared, side3Squared};
    // Sort the side lengths in ascending order
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2 - i; j++) {
            if (sidesSquared[j] > sidesSquared[j + 1]) {
                int temp = sidesSquared[j];
                sidesSquared[j] = sidesSquared[j + 1];
                sidesSquared[j + 1] = temp;
            }
        }
    }

    // Check if the triangle is right-angled
    if (sidesSquared[0] + sidesSquared[1] == sidesSquared[2]) {
        return 1;
    } else {
        return 0;
    }
}

// Function to check if points form a right-angled triangle
int isRightTriangle(Point P1, Point P2, Point P3) {
    return RightTriangle(P1, P2, P3);
}

// Test cases
int main() {
    Point P1 = {0, 0};
    Point P2 = {3, 0};
    Point P3 = {0, 4};

    std::cout << isRightTriangle(P1, P2, P3) << std::endl; // Output: 1

    return 0;
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

export default PlacementCoding1