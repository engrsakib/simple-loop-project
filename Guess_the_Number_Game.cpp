#include <bits/stdc++.h>


using namespace std;

int main() {
    srand(static_cast<unsigned>(time(0))); // Seed for random number generation
    int number = rand() % 100 + 1; // Random number between 1 and 100
    int guess;
    bool guessedCorrectly = false;

    cout << "Guess the number between 1 and 100: ";

    while (!guessedCorrectly) {
        cin >> guess;
        if (guess > number) {
            cout << "Too high! Try again: ";
        } else if (guess < number) {
            cout << "Too low! Try again: ";
        } else {
            cout << "Congratulations! You guessed it right." << endl;
            guessedCorrectly = true;
        }
    }

    return 0;
}
