export function getYouTubeVideoId(url) {
    // Kiểm tra xem URL có chứa "youtube.com" không
    if (url.includes("youtube.com")) {
        // Lấy phần query của URL
        const queryString = url.split('?')[1];
        // Tách các tham số trong query
        const queryParams = new URLSearchParams(queryString);
        // Trả về giá trị của tham số 'v' (ID video)
        return queryParams.get('v');
    }
    // Trả về null nếu không phải là URL YouTube
    return null;
}