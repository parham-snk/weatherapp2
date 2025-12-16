export function register() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register(`${process.env.PUBLIC_URL}/service-worker.js`)
                .then((registration) => {
                    console.log('Service Worker ثبت شد: ', registration);
                })
                .catch((error) => {
                    console.error('ثبت Service Worker با خطا مواجه شد: ', error);
                });
        });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            });
    }
}