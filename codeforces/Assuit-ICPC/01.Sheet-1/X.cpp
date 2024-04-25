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
    int s1, s2, s, e1, e2, e;
    // *input
    cin >> s1 >> e1 >> s2 >> e2;
    // *proccessing...
    s = max(s1, s2);
    e = min(e1, e2);

    // *Output
    if (s <= e && e <= max(e1, e2))
        cout << s << " " << e << endl;
    else
        cout << -1 << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}