/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let vals1 = [];
    let vals2 = [];
    let i = 0;
    let result = [];
    let sum = 0;
    let carry  = false;

    while (l1.next){
        vals1.push(l1.val);
        l1 = l1.next;
    }while(l2.next){
        vals2.push(l2.val);
        l2 = l2.next;
    }

    vals1.reverse()
    vals2.reverse()

    while(vals1[i] || vals2[i]){

        if(vals1[i] && vals1[i]){
            sum = vals1[i] + vals1[i];
        }
        else if(!vals1[i]){
            sum = vals2[i];
        }
        else{
            sum = vals2[i];
        }

        if(carry){
            sum+=1;
        }

        if(sum>10){
            sum -= 10;
            carry = true;
        }
        result.push(sum);
    }
    return result

};