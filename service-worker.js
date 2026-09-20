self.addEventListener("install", function(event) {
    console.log("AI Hair Care App installed");
});

self.addEventListener("activate", function(event) {
    console.log("AI Hair Care App activated");
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return new Response(
                "AI Hair Care is currently offline."
            );
        })
    );
});