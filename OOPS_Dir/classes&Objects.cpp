#include <iostream>
using namespace std;

class Student {
    string name;
    float cgpa;

    void getPerce(){
        cout<<(cgpa*10)<<endl;
    }
};

int main(){
    Student s1;
    cout<<sizeof(s1)<<endl;
    return 0;
}