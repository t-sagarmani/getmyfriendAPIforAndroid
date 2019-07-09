
            $.getJSON('http://localhost:90/productf', function (res) {

                $.each(res, function (index) {
                    console.log(res[index].pname)
                    $('#stage').append('<p > Name: ' + res[index].pname + '</p>' +
                        "<p>Email : " + res[index].type + "<p/>" +
                        "<p>Email : " + res[index].price + "<p/>" +
                        "<p>Email : " + res[index].sold_to + "<p/>"
                    );
                    $('#stage').append('<p><button id="delete" value="' + res[index]._id
                        + '">' + res[index]._id + ' Delete</button></p>');

                    $('#stage').append('<p><button id="update" value="' + res[index]._id
                        + '">' + res[index]._id + ' UPDATE</button></p>');

                    $('#stage').on('click', '#delete', function () {

                        id = $(this).val();
                        alert(id);
                        $.ajax({
                            url: 'http://localhost:90/deleteproduct/' + id,
                            type: 'DELETE',
                            dataType: 'json',
                            data: id,
                            success: function (data, textStatus, xhr) {
                                console.log(data);
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                console.log('Error in Operation');
                            }
                        });
                    });
                    $('#stage').on('click', '#update', function () {
                        id = $(this).val();
                        alert(id);
                        $.ajax({
                            url: 'http://localhost:90/getproduct/' + id,
                            type: 'GET',
                            dataType: 'json',
                            data: id,
                            success: function (data, textStatus, xhr) {
                                console.log(data);
                                $('#pname').val(data.pname);
                                $('#type').val(data.type);
                                $('#price').val(data.price);
                                $('#sold_to').val(data.sold_to);
                                $('#ids').val(data._id);
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                console.log('Error in Operation');
                            }
                        });
                    });
                    $('#updateform').on('click', '#done', function () {
                        id = $('#ids').val();
                        alert(id);
                        data={
                            pname:$('#pname').val(),
                            type:$('#type').val(),
                            price:$('#price').val(),
                            sold_to:$('#sold_to').val(),

                        }
                        $.ajax({
                            url: 'http://localhost:90/updateproduct/' + id,
                            type: 'PUT',
                            dataType: 'json',
                            data: data,
                            success: function (data, textStatus, xhr) {
                                console.log(data);
                         
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                console.log('Error in Operation');
                            }
                        });
                    });
                    // $('#update').click(function () {
                    //     // $.getJSON('http://localhost:90/rendid', function (res) {
                    //     alert("res[index].name");
                    //     // });
                    // })
                    // $('#update').click(function () {
                    // a=res[index].name ;
                    // alert("dafdafdfdafaf");
                    // })
                    // +'<a id="update" href=http://localhost:90/rendid/' + res[index]._id + '>' +hehehe+ '</a>'+

                    // $("#name11").val(a);



                }
                );

                // $('#update').click(function () {
                //     a=res[index].name ;
                //     alert("dafdafdfdafaf");
                //     })

                //     $("#name11").val(a);

            });