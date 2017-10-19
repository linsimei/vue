var app = new Vue({
    el: "#container",
    data: {
        com: '',
        no: '3326334569131',
        company: [],
        Traces: []
    },
    methods: {
        getCompany: function () {
            $.get("http://localhost/home/company2", function (data) {
                app.company = data;
            })
        },

        getTraces: function () {
            $.get("http://localhost/home/kuaidi?company=" + app.com + "&code=" + app.no, function (data) {
                data = JSON.parse(data);
                app.Traces = data.Traces;
            })
        }
    }
})

app.getCompany();