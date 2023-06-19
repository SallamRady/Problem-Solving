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

string toLower(string str)
{
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
    }
    return str;
}

string toUpper(string str)
{
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 32;
    }
    return str;
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

int main()
{
    // prepare..code
    fast;
    // declaration
    int n,m,x,y,z;
    bool valid = true;
    map<int,int> money;

    // get input
    cin>>n>>m;
    for(int i=0; i<n; i++)
    {
        cin>>x;
        money[i+1] = x;
    }
    for(int i=0; i<m; i++)
    {
        cin>>y>>x>>z;
        money[x] += z;
        money[y] -= z;

    }

    for(auto a:money){
        if(a.second < 0)valid = false;
    }
    // processing

    //output
    cout<<(valid?"YES":"NO")<<endl;
    return 0;
}
