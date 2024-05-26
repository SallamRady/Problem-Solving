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
    string str;
    bool good = true;
    // *input
    cin >> testcases;
    // *proccessing...
    while (testcases--)
    {
        cin >> str;
        good = false;
        for (int i = 0; i < str.size() - 2; i++)
        {
            if (str[i] == '0' && str[i + 1] == '1' && str[i + 2] == '0')
            {

                good = true;
                cout << "Good" << endl;
                break;
            }
            else if (str[i] == '1' && str[i + 1] == '0' && str[i + 2] == '1')
            {

                good = true;
                cout << "Good" << endl;
                break;
            }
            else
                continue;
        }
        if (!good)
            cout << "Bad" << endl;
    }
    // *Output
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}