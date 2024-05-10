[en - English](./README.md)

Cho một mảng số nguyên nums được sắp xếp theo thứ tự không giảm, hãy loại bỏ các phần tử trùng lặp ngay tại chỗ (in-place) sao cho mỗi phần tử duy nhất chỉ xuất hiện một lần. Thứ tự tương đối của các phần tử nên được giữ nguyên. Sau đó, trả về số lượng các phần tử duy nhất trong nums.

Xem xét số lượng phần tử duy nhất của nums là k, để được chấp nhận, bạn cần thực hiện các điều sau:

Thay đổi mảng nums sao cho k phần tử đầu tiên của nums chứa các phần tử duy nhất theo thứ tự chúng xuất hiện ban đầu trong nums. Các phần tử còn lại của nums không quan trọng cũng như kích thước của nums.
Trả về k.
Trình phán đoán tùy chỉnh:

Trình phán đoán sẽ kiểm tra giải pháp của bạn với đoạn mã sau:

int[] nums = [...]; // Mảng đầu vào
int[] expectedNums = [...]; // Câu trả lời mong đợi với độ dài chính xác

int k = removeDuplicates(nums); // Gọi triển khai của bạn

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
Nếu tất cả các lệnh assert đều pass, thì giải pháp của bạn sẽ được chấp nhận.

Ví dụ 1:

Đầu vào: nums = [1,1,2]
Đầu ra: 2, nums = [1,2,_]
Giải thích: Hàm của bạn nên trả về k = 2, với hai phần tử đầu tiên của nums là 1 và 2 tương ứng.
Không quan trọng bạn để gì phía sau k trả về (do đó chúng là dấu gạch dưới).
Ví dụ 2:

Đầu vào: nums = [0,0,1,1,1,2,2,3,3,4]
Đầu ra: 5, nums = [0,1,2,3,4,,,,,_]
Giải thích: Hàm của bạn nên trả về k = 5, với năm phần tử đầu tiên của nums là 0, 1, 2, 3, và 4 tương ứng.
Không quan trọng bạn để gì phía sau k trả về (do đó chúng là dấu gạch dưới).

Ràng buộc:

1 <= nums.length <= 3 \* 104
-100 <= nums[i] <= 100
nums được sắp xếp theo thứ tự không giảm.

---

Phân tích giải pháp tốt nhất:

Giải pháp tốt nhất cho vấn đề này là sử dụng hai con trỏ để duyệt qua mảng. Một con trỏ (i) được sử dụng để lặp qua mảng, trong khi con trỏ khác (j) được sử dụng để theo dõi vị trí mà phần tử duy nhất tiếp theo nên được đặt. Nếu phần tử hiện tại khác với phần tử trước đó, nó sẽ được đặt tại vị trí được chỉ bởi con trỏ j, và con trỏ j sẽ tăng lên. Hàm cuối cùng trả về giá trị của con trỏ j, đó là số lượng phần tử duy nhất.

Độ phức tạp thời gian của giải pháp này là O(n), với n là độ dài của mảng đầu vào, và độ phức tạp không gian là O(1), vì không có không gian bổ sung nào được sử dụng.
