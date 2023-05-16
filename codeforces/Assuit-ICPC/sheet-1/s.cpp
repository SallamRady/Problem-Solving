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
    double x;
 
    cin >> x;
 
    if (x >= 0 && x <= 25)
        cout << "Interval [0,25]" << endl;
    else if (x > 25 && x <= 50)
        cout << "Interval (25,50]" << endl;
    else if (x > 50 && x <= 75)
        cout << "Interval (50,75]" << endl;
    else if (x > 75 && x <= 100)
        cout << "Interval (75,100]" << endl;
    else
        cout << "Out of Intervals" << endl;
    return 0;
}