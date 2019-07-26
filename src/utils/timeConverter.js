export default seconds => {
    let total = seconds;
    const hours = Math.floor(total / 3600);
    total %= 3600;
    const minutes = Math.floor(total / 60);
    return {
        h: hours,
        mn: minutes,
        s: total % 60,
    };
};
