$(function()
{
    $('#productTableList').on('sort.sortable', function(e, data)
    {
        // TODO: save order to server.
        var list = '';
        for(i = 0; i < data.list.length; i++) list += $(data.list[i]).find('td').eq(1).find('input').val() + ',';
        $.post(createLink('product', 'ajaxOrder'), {'products' : list, 'orderBy' : orderBy});
    });
});
