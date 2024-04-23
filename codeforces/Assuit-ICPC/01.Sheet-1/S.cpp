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
// TODO::declare and define helper functions and variables
void solution()
{
    // *declare our variables..
    float x;
    // *input
    cin >> x;
    // *proccessing...
    // *Output
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
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}