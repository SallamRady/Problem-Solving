#include <iostream>
#include <iomanip>
#include <cmath>
#include <bitset>
#include <string>
#include <algorithm>
#include <set>
#include <map>
#include <climits>
#include <stack>
#include <vector>
#include <deque>
#include <queue>
#include <unordered_set>
#define endl "\n"
#define ll long long
#define fast                          \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);
#define all(a) a.begin(), a.end()
#define scan(v)        \
    for (auto &it : v) \
        cin >> it;
using namespace std;
bool isNumeric(string const &str)
{
    return !str.empty() && str.find_first_not_of("0123456789") == string::npos;
}
 
int bubblesort(int a[], int n)
{
    bool swapped = false;
    int numSwaps = 0;
 
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                swap(a[j], a[j + 1]);
                numSwaps++;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
 
    return numSwaps;
}
 
template <typename T>
void printArray(vector<T> ar)
{
    for (auto a : ar)
        cout << a << endl;
}
 
int main()
{
    // prepare..code
    fast;
    // declaration
    int num1 = 0, num2 = 0, digit = 0;
    bool key = false;
    char c;
    string str;
 
    cin >> str;
 
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        {
            c = str[i];
            key = true;
            continue;
        }
        if (!key)
        {
            digit = ((int)str[i] - '0');
            num1 = num1 * 10 + digit;
        }
        else
        {
            digit = ((int)str[i] - '0');
            num2 = num2 * 10 + digit;
        }
    }
 
    switch (c)
    {
    case '+':
    cout<<num1+num2<<endl;
        break;
    case '-':
    cout<<num1-num2<<endl;
        break;
    case '*':
    cout<<num1*num2<<endl;
        break;
    default:
    cout<<num1/num2<<endl;
        break;
    }
    return 0;
}