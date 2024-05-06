[en - English](./README.md)

Cho một mảng số nguyên nums và một số nguyên val, hãy loại bỏ tất cả các lần xuất hiện của val trong nums tại chỗ. Thứ tự của các phần tử có thể thay đổi. Sau đó trả về số phần tử bằng số không bằng val.

Xét số phần tử trong nums không bằng val là k, để được chấp nhận, bạn cần làm như sau:

Thay đổi mảng nums sao cho k phần tử đầu tiên của nums chứa các phần tử không bằng val. Các phần tử còn lại của nums không quan trọng bằng kích thước của nums.
Trả lại K.
Thẩm phán tùy chỉnh:

Thẩm phán sẽ kiểm tra giải pháp của bạn bằng đoạn mã sau:

int[] nums = […]; // Mảng đầu vào
int val = ...; // Giá trị cần xóa
int[] dự kiếnNums = [...]; // Câu trả lời mong đợi với độ dài chính xác.
// Nó được sắp xếp không có giá trị nào bằng val.

int k = RemoveElement(nums, val); // Gọi phần triển khai của bạn

khẳng định k == dự kiếnNums.length;
sắp xếp(số, 0, k); // Sắp xếp k phần tử đầu tiên của nums
for (int i = 0; i < realLength; i++) {
khẳng định số [i] == dự kiếnNums [i];
}
Nếu tất cả các xác nhận đều vượt qua thì giải pháp của bạn sẽ được chấp nhận.

Ví dụ 1:

Đầu vào: nums = [3,2,2,3], val = 3
Đầu ra: 2, nums = [2,2,_,_]
Giải thích: Hàm của bạn sẽ trả về k = 2, với hai phần tử đầu tiên của nums là 2.
Việc bạn để lại gì ngoài k được trả về không quan trọng (do đó chúng là dấu gạch dưới).
Ví dụ 2:

Đầu vào: nums = [0,1,2,2,3,0,4,2], val = 2
Đầu ra: 5, nums = [0,1,4,0,3,_,_,_]
Giải thích: Hàm của bạn phải trả về k = 5, với năm phần tử đầu tiên của số chứa 0, 0, 1, 3 và 4.
Lưu ý rằng năm phần tử có thể được trả về theo bất kỳ thứ tự nào.
Việc bạn để lại gì ngoài k được trả về không quan trọng (do đó chúng là dấu gạch dưới).

Hạn chế:

0 <= số.độ dài <= 100
0 <= số[i] <= 50
0 <= giá trị <= 100

---

Có hai cách chính để giải quyết vấn đề này: sử dụng hai con trỏ hoặc sử dụng một con trỏ và một biến đếm.

Phương pháp 1: Sử dụng hai con trỏ

Trong phương pháp này, chúng ta sử dụng hai con trỏ: một con trỏ i duyệt qua từng phần tử của mảng và một con trỏ j chỉ đến vị trí cuối cùng của mảng mà không chứa val. Khi chúng ta tìm thấy một phần tử không bằng val, chúng ta sao chép nó vào vị trí j và tăng j lên 1.

Độ phức tạp về thời gian của phương pháp này là O(n), vì chúng ta duyệt qua mảng một lần. Độ phức tạp về không gian là O(1), vì chúng ta chỉ sử dụng một số lượng hằng số biến bổ sung.

Phương pháp 2: Sử dụng một con trỏ và một biến đếm

Trong phương pháp này, chúng ta sử dụng một con trỏ i để duyệt qua từng phần tử của mảng và một biến đếm count để theo dõi số lượng phần tử không bằng val. Khi chúng ta tìm thấy một phần tử không bằng val, chúng ta sao chép nó vào vị trí count và tăng count lên 1.

Độ phức tạp về thời gian và không gian của phương pháp này cũng tương tự như phương pháp 1: O(n) về thời gian và O(1) về không gian.

So sánh hai phương pháp

Cả hai phương pháp đều có độ phức tạp về thời gian và không gian tương tự, nhưng phương pháp 1 có thể làm thay đổi thứ tự của các phần tử trong mảng, trong khi phương pháp 2 giữ nguyên thứ tự. Do đó, nếu thứ tự của các phần tử là quan trọng, bạn nên sử dụng phương pháp 2. Nếu không, bạn có thể sử dụng bất kỳ phương pháp nào