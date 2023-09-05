#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // Declaration...
    int n, target = 4;
    // take input from user.
    cin >> n;
    vector<int> nums(n);
    for (auto &a : nums)
        cin >> a;
    //Complixty O(n^2);
    for (auto a : nums)
    {
        for (auto b : nums)
        {
            if (a != b)
            {
                if (a + b == target){
                    cout<<"[ "<<a<<" , "<<b<<" ]"<<endl;
                    return 0;
                }
            }
        }
    }

    return 0;
}