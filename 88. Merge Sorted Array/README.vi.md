[en - English](./README.md)

Bạn được cho hai mảng số nguyên nums1 và nums2, được sắp xếp theo thứ tự không giảm, và hai số nguyên m và n, biểu thị số phần tử tương ứng trong nums1 và nums2.

Hợp nhất nums1 và nums2 thành một mảng duy nhất được sắp xếp theo thứ tự không giảm.

Mảng được sắp xếp cuối cùng không được hàm trả về mà thay vào đó được lưu trữ bên trong mảng nums1. Để đáp ứng điều này, nums1 có độ dài m + n, trong đó m phần tử đầu tiên biểu thị các phần tử cần được hợp nhất và n phần tử cuối cùng được đặt thành 0 và nên được bỏ qua. nums2 có độ dài là n.

Ví dụ 1:

Dữ liệu vào: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Đầu ra: [1,2,2,3,5,6]
Giải thích: Các mảng chúng ta đang hợp nhất là [1,2,3] và [2,5,6].
Kết quả của việc hợp nhất là [1,2,2,3,5,6] với các phần tử được gạch chân đến từ nums1.
Ví dụ 2:

Đầu vào: nums1 = [1], m = 1, nums2 = [], n = 0
Đầu ra: [1]
Giải thích: Các mảng chúng ta đang hợp nhất là [1] và [].
Kết quả của việc hợp nhất là [1].
Ví dụ 3:

Đầu vào: nums1 = [0], m = 0, nums2 = [1], n = 1
Đầu ra: [1]
Giải thích: Các mảng chúng ta đang hợp nhất là [] và [1].
Kết quả của việc hợp nhất là [1].
Lưu ý rằng vì m = 0 nên không có phần tử nào trong nums1. Số 0 chỉ ở đó để đảm bảo kết quả hợp nhất có thể vừa với nums1.

Hạn chế:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

Theo dõi: Bạn có thể đưa ra thuật toán chạy trong thời gian O(m + n) không?

---

Thuật toán "hợp nhất từ cuối" là một giải pháp hiệu quả cho vấn đề hợp nhất hai mảng đã sắp xếp.

Tư duy thuật toán:

Đầu tiên, chúng ta khởi tạo ba con trỏ: indexNums1, indexNums2, và mergeIndex. indexNums1 và indexNums2 trỏ đến cuối của nums1 và nums2 tương ứng, trong khi mergeIndex trỏ đến vị trí cuối cùng của mảng nums1 (bao gồm cả các phần tử 0).

Tiếp theo, chúng ta bắt đầu một vòng lặp while chạy cho đến khi cả hai mảng nums1 và nums2 đều đã được duyệt hết. Trong mỗi lần lặp, chúng ta so sánh phần tử tại vị trí indexNums1 của nums1 và phần tử tại vị trí indexNums2 của nums2. Phần tử lớn hơn sẽ được chèn vào nums1 tại vị trí mergeIndex.

Cuối cùng, sau khi vòng lặp while kết thúc, có thể vẫn còn một số phần tử chưa được duyệt hết trong nums2. Vì vậy, chúng ta cần một vòng lặp while thứ hai để sao chép những phần tử còn lại từ nums2 vào nums1.

Lý do chọn thuật toán:

Thuật toán "hợp nhất từ cuối" được chọn vì nó không yêu cầu không gian bổ sung và thực hiện trong thời gian tuyến tính O(m + n), với m và n là số lượng phần tử trong mỗi mảng. Điều này làm cho nó trở thành một giải pháp hiệu quả cho vấn đề này.

Độ phức tạp:

Thời gian: O(m + n), với m và n là số lượng phần tử trong mỗi mảng. Điều này bởi vì trong trường hợp xấu nhất, chúng ta cần duyệt qua tất cả các phần tử trong cả hai mảng.
Không gian: O(1), vì chúng ta không sử dụng bất kỳ không gian bổ sung nào ngoài các biến chỉ mục.
Lợi thế so với các thuật toán khác:

Không yêu cầu không gian bổ sung: Khác với thuật toán hợp nhất truyền thống, thuật toán "hợp nhất từ cuối" không yêu cầu không gian bổ sung, điều này làm cho nó trở thành một giải pháp tốt cho vấn đề hợp nhất hai mảng khi không được phép sử dụng không gian bổ sung.
Hiệu quả về thời gian: Thuật toán "hợp nhất từ cuối" thực hiện trong thời gian tuyến tính, điều này làm cho nó trở thành một giải pháp hiệu quả cho vấn đề hợp nhất hai mảng đã sắp xếp.
