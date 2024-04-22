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
    char x;
    string evenDigits = "02468";
    // *input
    cin >> x;
    // *proccessing...
    // *Output
    if (evenDigits.find(x) != string::npos)
        cout << "EVEN" << endl;
    else
        cout << "ODD" << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}