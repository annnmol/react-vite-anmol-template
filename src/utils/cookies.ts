class Cookies {

    static storeCookie(key: string, data: string): void {
        document.cookie = `${key}=${data}; path=/`;
    }

    static getCookie(key: string): string | null {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieKey, cookieValue] = cookie.split('=');
            if (cookieKey === key) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }

    static deleteCookie(key: string): void {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    static storeCookieWithExpiry(key: string, data: string, timeInMinutes: number = 15): void {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + timeInMinutes * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;
        document.cookie = `${key}=${data}; ${expires}; path=/`;
    }

    static getCookieWithExpiry(key: string): string | null {
        const cookieValue = this.getCookie(key);
        if (!cookieValue) {
            return null;
        }

        const expirationTime = this.getCookieExpirationTime(key);

        // Check if the cookie has expired
        if (expirationTime && new Date().getTime() > expirationTime) {
            this.deleteCookie(key);
            return null;
        }

        return cookieValue;
    }




    // CHECK
    private static getCookieExpirationTime(key: string): number | null {
        const cookieName = `${key}=`;
        const cookies = document.cookie.split('; ');

        for (const cookie of cookies) {
            if (cookie.indexOf(cookieName) === 0) {
                const cookieValue = cookie.substring(cookieName.length);
                const expiresAt = parseInt(cookieValue);
                if (!isNaN(expiresAt)) {
                    return expiresAt;
                }
            }
        }
        return null;
    }
}

export default Cookies;
