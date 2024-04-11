/*
 * Application
 */
addEventListener('render', function() {
    // Tooltips
    $('[data-bs-toggle="tooltip"]').each(function() {
        $(this).tooltip();
    });

    // Popovers
    $('[data-bs-toggle="popover"]').each(function() {
        var $el = $(this);
        if ($el.data('content-target')) {
            $el
                .popover({ html: true, content: $($el.data('content-target')).get(0) })
                .on('shown.bs.popover', function() {
                    $('input:first', $($el.data('content-target'))).focus();
                })
            ;
        }
        else {
            $el.popover();
        }
    });
});

/*
 * Mini Notification Partial
 */
addEventListener('user:notification-count', (ev) => {
    var unreadCount = ev.detail.unreadCount || 0,
        $container = document.querySelector('.mini-notifications');

    $container.querySelector('.badge').innerText = unreadCount;
    $container.classList[unreadCount ? 'add' : 'remove']('has-unread');
});
