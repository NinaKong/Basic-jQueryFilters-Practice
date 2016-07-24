# Basic-jQueryFilters-Practise
Practice for basic jQuery filters. 

# Basic jQUery Filters Including
- Using first or last filters to select only first or last item in a particular matched results set
- Using even or odd filters to select only even or odd-numbered items in a particular matched results set
- Using more advanced expressions (such as greater than and not equal to) in a particular matched results set

#Examples

- $("#Content a:first").css("color", "#b37aa5"); 
- $("#Content a:last").css("color", "#eba96d"); 
- $("#Content a:even").css("padding-left", "10px"); 
- $("#Content a:odd").css("padding-left", "10px"); 
- $("#Content .github:first").css("color", "#b26c34"); 
- $("#Content .linkedin:even").css("color", "#e4b7bf"); 
- $("#Content a:gt(3)").css("font-size", "2.5em");
- $("#Content a:not(a:eq(4))").css("font-size", "2.5em");


