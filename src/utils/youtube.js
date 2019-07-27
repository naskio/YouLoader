const regex = RegExp(
    '^(?:https?:\\/\\/)?(?:www\\.)?(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=))((\\w|-){11})?$'
);

export const youtubeUrlChecker = url => url && regex.test(url);

export const youtubeIdExtractor = url => {
    return url.substring(url.length - 11);
};
