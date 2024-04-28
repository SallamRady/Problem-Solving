
#include <iostream>
#include <iomanip>
#include <cmath>
#include <bitset>
#include <string>
using namespace std;
const string chars = "abcdefghijklmnopqrstuvwxyz";

int main()
{
    // Declaration...
    double a, b, c, doubleResult = 0;
    long long result = 0;
    // input..
    cin >> a >> b >> c;
    // processing
    doubleResult = (a * b) / c;
    result = (long long)doubleResult;
    cout<<"doubleResult - result"<<doubleResult - result<<endl;
    if (doubleResult - result != 0)
    {
        cout << "double" << endl;
    }
    else
    {
        if (result >= -2147483648 && result <= 2147483647)
        {
            cout << "int" << endl;
        }
        else
        {
            cout << "long long" << endl;
        }
    }
    // output

    return 0;
}