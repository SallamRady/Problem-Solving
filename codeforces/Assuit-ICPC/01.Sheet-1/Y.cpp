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
    ll a, b, c, d, mod = 1e9, haf1, haf2, result, digits;
    // *input
    cin >> a >> b >> c >> d;
    // *proccessing...
    haf1 = ((a % mod) * (b % mod)) % mod;
    haf2 = ((c % mod) * (d % mod)) % mod;
    result = ((haf1 % mod) * (haf2 % mod)) % mod;
    digits = result % 100;
    // *Output
    if (digits <= 9)
        cout << "0" << digits << endl;
    else
        cout << digits << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}