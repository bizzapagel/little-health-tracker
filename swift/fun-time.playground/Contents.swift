import Foundation
import UIKit

// If/else statments

var num1 = 3

if num1 == 10 {
    print("Num is equal to ten")
} else if num1 > 10 {
    print("Num is greater than ten")
} else {
    print("Num is less than ten")
}

// Optionals/unwrapping

var num2: Int? = 7

print(num2)

if let val = num2 {
    print(val)
}

// Guard statements

func numLargerThanFive(num: Int) -> String {
    guard num > 5 else { return "No" }
    return "Yes"
}

print("Number larger than five? " + numLargerThanFive(num: 6))

var text: String? = "Hello"

print(text)

func guardUnwrap() {
    guard let val = text else { return }
    print(val)
}

guardUnwrap()

// For loops

var friends: [String] = [
    "Carl",
    "Frank",
    "Bill"
]

for friend in friends {
    print("I have a friend named " + friend)
}

// Enums

enum States {
    case Processing
    case Failed
    case Completed
}

enum StatesShorthand {
    case Processing, Failed, Completed
}

var currentState = States.Processing
print(currentState)

var currentState2: States?
currentState2 = .Processing
print(currentState2)

if(currentState == States.Processing) {
    print("Processing...")
}

// Switch statements

func checkState() {
    switch currentState {
    case States.Processing:
        print("Current State: Processing")
    case States.Failed:
        print("Current State: Failed")
    case States.Completed:
        print("Current State: Completed")
    }
}

checkState()

// Protocols

protocol CarDataSource {
    var color: String { get set }
    
    func drive()
    func allWheelDrive() -> Bool
}

class Car {

}

class BMW:Car, CarDataSource {
    var color: String = ""
    
    func drive() {
        
    }
    
    func allWheelDrive() -> Bool {
        return true
    }
}

// Closures

var isOldMan: ((Int) -> Bool) = { num in
    if num > 80 {
        return true
    }
    return false
}

if isOldMan(70) {
    print("He is an old man")
} else {
    print("He is not an old man")
}

// Dictionaries

var cars: [String: String] = [
    "Heart": "Shart",
    "Knee": "Pee"
]

if let value = cars["Heart"] {
    print(value)
}

// Type Aliases

typealias Address = [String: String]

var address: Address = ["": ""]

func validateAddress(address: Address) {
    
}

// Ternary Operators

var age = 33

var ageCheck = age > 32 ? true : false

print(ageCheck)

// Sorting

var numbers: [Int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

func isNumInArray(num: Int, array: [Int]) -> Bool {
    for n in array {
        if n == num {
            return true
        }
    }
    return false
}

print("--------")
print(isNumInArray(num: 11, array: numbers))


