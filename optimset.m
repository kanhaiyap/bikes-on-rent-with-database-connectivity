function[Jval,gradient]=costFunction(theta)
Jval=(theta(1)-5)^2+(theta(2)-5)^2
gradient=zeros(2,1);
gradient(1)=2*(theta(1)-5);
grdient(2)=2*(theta(2)-5);