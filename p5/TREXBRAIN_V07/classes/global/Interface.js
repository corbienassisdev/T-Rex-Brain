function Interface() {
	this.dpsAvg = [];
	this.dpsTop = [];
	this.chart = this.createChart();
	this.updateChart(0, 0, 0); 
}

Interface.prototype.createChart = function() {

	var chart = new CanvasJS.Chart("fits",{
		title :{
			text: "fitnesses per generations",
			fontSize: 16,
			fontWeight: "normal",
			fontStyle: "italic",
			verticalAlign: "bottom"
		},
		axisX:{
			titleFontSize: 16,
			title : "Number of generations",
			labelFontSize: 14,
			minimum: 0
		},
		axisY:{
			titleFontSize: 16,
			title : "fitnesses",
			labelFontSize: 14,
			gridThickness: 1,
			gridColor: "rgb(210, 210, 210)",
			minimum: 0
		},		
		data: [
		{
			type: "line", //ou spline
			dataPoints: this.dpsAvg,
            color: "rgb(0, 119, 255)",
            showInLegend: true,
            legendText: "Average Fitness"
		},
		{
			type: "line",
			dataPoints: this.dpsTop,
            color: "rgb(0, 50, 100)",
            legendText: "Top Fitness",
            showInLegend: true,
		}]
	});

	return chart;
};

Interface.prototype.updateChart = function(x, avg, top){

	this.dpsAvg.push({
		x: x,
		y: avg
	});

	this.dpsTop.push({
		x: x,
		y: top
	});
		
	this.chart.render();
};

Interface.prototype.data = function() {

	//TODO trouver nom plus parlant à la fct + implémenter
};

Interface.log = function(text) {

	var content = $('#logs').html();
	$('#logs').html(content + text + '<br />');
};


