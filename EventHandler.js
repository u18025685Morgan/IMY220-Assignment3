function EventHandler(arr){
    this.arr = arr;

    this.getEventsBetweenDates = function(start, end){
        var arr1 = this.arr.filter(function (element){
            var s = element.dateStart;
            if(s >= start)
            {
                var e = element.dateEnd;
                if(e <= end){
                    return element;
                }
            }
        });
        return arr1;
    }

    this.getByMonth = function(month){
        var arr2 = this.arr.filter(function (element){
            var start = element.dateStart;
            var m = start.substring(5, 7);
            if(m == month)
            {
                return element;
            }

        });
        return arr2;
    }

    this.getUniqueDateAndSort = function(){
        var empty = [];
        var unique = this.arr.reduce(function(accumulator, currElement){
            if(currElement.dateStart !== accumulator.dateStart && currElement.dateEnd !== accumulator.dateEnd)
            {
                // console.log("A " + accumulator);
                // console.log(currElement);
                return [...accumulator, currElement];
            }
        }, empty);

        unique.sort(function(a, b) {
            var startMonth = a.dateStart;
            
            var monthA = startMonth.substring(5,7);

            var startMonth1 = b.dateStart;
            var monthB = startMonth1.substring(5,7);

            return monthA - monthB;
        });

        return unique;
    }

    this.getSummary = function(variable = this.arr){
        var sum = [];
        if(variable.constructor === Array)
        {
            sum = variable.map(function(element){
                if(element.dateStart === element.dateEnd)
                {
                    return "On " + element.dateStart + ": " + element.name + " (" + element.description + ")";
                }
                else
                {
                    return "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")";
                }
            });
        }else
        {
            if(variable.dateStart === variable.dateEnd)
                {
                    sum.push("On " + variable.dateStart + ": " + variable.name + " (" + variable.description + ")");
                }
                else
                {
                    sum.push("From " + variable.dateStart + " to " + variable.dateEnd + ": " + variable.name + " (" + variable.description + ")");
                }
        }
        return sum;
    
    }
}

var handler = new EventHandler(events);

Array.prototype.getEventsBetweenDates = function(start, end){
        var arr1 = this.filter(function (element){
            var s = element.dateStart;
            if(s >= start)
            {
                var e = element.dateEnd;
                if(e <= end){
                    return element;
                }
            }
        });
        return arr1;
    }

Array.prototype.getByMonth = function(month){
    var arr2 = this.filter(function (element){
        var start = element.dateStart;
        var m = start.substring(5, 7);
        if(m == month)
        {
            return element;
        }

    });
    return arr2;
}

Array.prototype.getUniqueDateAndSort = function(){
    var empty = [];
    var unique = this.reduce(function(accumulator, currElement){
        if(currElement.dateStart !== accumulator.dateStart && currElement.dateEnd !== accumulator.dateEnd)
        {
            // console.log("A " + accumulator);
            // console.log(currElement);
            return [...accumulator, currElement];
        }
    }, empty);

    unique.sort(function(a, b) {
        var startMonth = a.dateStart;
        
        var monthA = startMonth.substring(5,7);

        var startMonth1 = b.dateStart;
        var monthB = startMonth1.substring(5,7);

        return monthA - monthB;
    });

    return unique;
}

Array.prototype.getSummary = function(variable = this){
    var sum = [];
    if(variable.constructor === Array)
    {
        sum = variable.map(function(element){
            if(element.dateStart === element.dateEnd)
            {
                return "On " + element.dateStart + ": " + element.name + " (" + element.description + ")";
            }
            else
            {
                return "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")";
            }
        });
    }else
    {
        if(variable.dateStart === variable.dateEnd)
            {
                sum.push("On " + variable.dateStart + ": " + variable.name + " (" + variable.description + ")");
            }
            else
            {
                sum.push("From " + variable.dateStart + " to " + variable.dateEnd + ": " + variable.name + " (" + variable.description + ")");
            }
    }
    return sum;

}
