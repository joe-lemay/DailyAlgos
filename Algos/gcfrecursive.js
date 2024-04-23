function gcf(x, y) {

    if (x == y) {
        return x;
    }

    if (y > x) {
        if (y % x == 0) {
            return x;
        }
        y -= x;
        return gcf(x, y)
    }

    if (x % y == 0) {
        return y;
    }
    x -= y;
    return gcf(x, y);
}