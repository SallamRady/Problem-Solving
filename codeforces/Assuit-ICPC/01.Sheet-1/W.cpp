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
    int a, b, result, correctResult;
    char c, c2;
    // *input
    cin >> a >> c >> b >> c2 >> result;
    // *proccessing...
    switch (c)
    {
    case '+':
        correctResult = a + b;
        break;
    case '-':
        correctResult = a - b;
        break;
    case '*':
        correctResult = a * b;
        break;
    }
    // *Output
    if (correctResult == result)
        cout << "Yes" << endl;
    else
        cout << correctResult << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}