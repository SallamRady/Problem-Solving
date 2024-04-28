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
    ll a, b, c, d;
    // *input
    cin >> a >> b >> c >> d;
    // *proccessing...
    if ((a + b - c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    else if ((a + b * c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    else if ((a - b + c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    else if ((a - b * c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    else if ((a * b - c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    else if ((a * b + c) == d)
    {
        cout << "YES" << endl;
        return;
    }
    // *Output
    cout << "NO" << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}