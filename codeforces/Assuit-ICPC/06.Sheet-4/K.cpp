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
    int testcases;
    string s, t, ans = "";
    int n, m, mx, idx = 0;
    // *input
    cin >> testcases;
    // *proccessing...
    while (testcases--)
    {
        cin >> s >> t;
        ans = "";
        idx = 0;
        n = s.size();
        m = t.size();
        mx = max(n, m);
        while (idx < mx)
        {
            if (idx < n)
                ans += s[idx];
            if (idx < m)
                ans += t[idx];
            idx++;
        }
        cout << ans << endl;
    }
    // *Output...
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}