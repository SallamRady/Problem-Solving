/// import language labs.
#include <iostream>
#include <map>
#include <string>
#include <cmath>
#include <math.h>
#include <cmath>
#include <cstdio>
#include <vector>
#include <algorithm>
#include <bitset>
#include <set>
#include <stack>
#include <iomanip>
#include <queue>
///---------------Helpers.-------------///
#define endl "\n"
#define ll long long
#define fast                          \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);
#define all(a) a.begin(), a.end()
#define scan(v)        \
    for (auto &it : v) \
        cin >> it;
#define mod(a, n) (a % n + n) % n
///----------use namespace std.----------///
using namespace std;
///--------File Function to get input from file.-
void File()
{
#ifndef ONLINE_JUDGE
    // freopen("Input.txt", "r", stdin);
    // freopen("Output.txt", "w", stdout);
#endif
}

///***** Divide and conquer *****///
int getBit(int num, int idx)
{
    num = num >> idx;
    return num & 1;
}

int Solution();
int main()
{
    //** Prepare my Code **//
    fast;
    //** Solution **//
    int result = Solution();
    cout << result << endl;
}
int Solution()
{
    /// Declaration ...
    int n, m, k, mx = 0;

    /// Take input from user...
    cin >> n >> m;
    vector<pair<int, int>> conditions(m);
    for (auto &a : conditions)
        cin >> a.first >> a.second;
    cin >> k;
    vector<pair<int, int>> balls(k);
    for (auto &a : balls)
        cin >> a.first >> a.second;
    /// Processing...
    for (int i = 0; i < (1 << k); i++)
    {
        vector<int> frq(n + 1);
        for (int j = 0; j < k; j++)
        {
            if (getBit(i, j) == 0)
            {
                frq[balls[j].first]++;
            }
            else
            {
                frq[balls[j].second]++;
            }
        }
        int cnt = 0;
        for (int j = 0; j < m; j++)
        {
            int a = conditions[j].first, b = conditions[j].second;
            if (frq[a] >= 1 && frq[b] >= 1)
                cnt++;
        }
        mx = max(mx, cnt);
    }
    /// Output...
    cout << "mx :" << mx << endl;
    return mx;
}
