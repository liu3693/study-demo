function intoEdit() {
    $('#edit-button').on('click',function () {
        // 进入编辑
        let value = $(this).parent().text();
        let $changeWrapper = $(
            '<div class="change-wrapper" id="change-wrapper">' +
            '<input type="text" value="">' +
            '<div class="cancel" id="cancel">取消</div>' +
            '<div class="confirm" id="confirm">确认</div>' +
            '</div>'
        );
        $(this).parent().empty().append($changeWrapper);
        $('#change-wrapper input').val(parseFloat(value));

        // 点击取消
        $('#cancel').on('click',function () {
            $(this).closest('td').empty().text(parseFloat(value));
        });
        // 点击确认
        $('#confirm').click(function () {
            value = $('#change-wrapper input').val();
            $(this).closest('td').empty().text(parseFloat(value));
        })
        //
    });
}

export {intoEdit}