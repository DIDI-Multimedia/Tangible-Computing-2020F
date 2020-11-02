import javax.swing.*; 
import java.awt.*; 
import java.time.LocalDateTime; 

class Cts extends JPanel{
	static int angle = 90; 	
	static int minAngle = 90; 
	static int hrAngle = 90;
	static int startX = 300;
	static int startY = 300;

	static int second; 
	static int hour; 
	static int minute;

	static int hrArcEnd = 0; 
	static int mnArcEnd = 0; 
	static int scArcEnd = 0;  

	public static void wait(int ms)
	{
	    	try
		{
       			 Thread.sleep(ms);
    		}
    		catch(InterruptedException ex)
    		{
        		Thread.currentThread().interrupt();
    		}
	}
}
public class Clock{
	public static void createAndShowUI(){
		final ClockPanel panel = new ClockPanel(); 
		panel.validate(); 
		JFrame frame = new JFrame("Agma's Clock");   
         	frame.getContentPane().add(panel);
		frame.setSize(600,600);//600 width and 600 height  
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);//making the frame visible

		for(;;)
		{
			
			LocalDateTime now = LocalDateTime.now();
                	Cts.hour = now.getHour();

			if(Cts.hour>12){
				Cts.hour = Cts.hour - 12; 
			}
                	Cts.minute = now.getMinute();
			Cts.second = now.getSecond();
			panel.toAngle(); 
			panel.setArcEnd(); 
			Cts.wait(500);
			panel.fresh(); 
		} 

	}

	static class ClockPanel extends JPanel{

		@Override 
		public void paint(Graphics g){
		super.setBackground(Color.decode("#302c2b"));
			double endX   = 300 + 70 * Math.cos(Math.toRadians(-Cts.angle));
			double endY   = 300 + 70 * Math.sin(Math.toRadians(-Cts.angle));
			g.setColor(Color.decode("#CF6679")); 
        		g.drawLine(Cts.startX, Cts.startY,(int) endX,(int) endY); 
			g.drawArc(200,200,200,200,90,Cts.scArcEnd); 			
			
			endX   = 300 + 60 * Math.cos(Math.toRadians(-Cts.minAngle));
			endY   = 300 + 60 * Math.sin(Math.toRadians(-Cts.minAngle));
			g.setColor(Color.decode("#03DAC6")); 
        		g.drawLine(Cts.startX, Cts.startY,(int) endX,(int) endY); 
			g.drawArc(190,190,220,220,90,Cts.mnArcEnd); 			
			
			endX   = 300 + 50 * Math.cos(Math.toRadians(-Cts.hrAngle));
			endY   = 300 + 50 * Math.sin(Math.toRadians(-Cts.hrAngle));
			g.setColor(Color.decode("#B682F5")); 
        		g.drawLine(Cts.startX, Cts.startY,(int) endX,(int) endY); 
			g.drawArc(180,180,240,240,90,Cts.hrArcEnd); 			
    		}	

		public void fresh(){
			repaint();
		}

		public void toAngle(){
			if(Cts.second<=15){
				Cts.angle = 90; 
				Cts.angle = Cts.angle  - (6*Cts.second);
			}
			else{
				Cts.angle = 360; 
				Cts.angle = Cts.angle  - (6*(Cts.second-15)); 
			}

			if(Cts.minute<=15){
				Cts.minAngle = 90; 
				Cts.minAngle = Cts.minAngle  - (6*Cts.minute);
			}
			else{
				Cts.minAngle = 360; 
				Cts.minAngle = Cts.minAngle  - (6*(Cts.minute-15)); 
			}
			 
			if(Cts.hour<=3){
				Cts.hrAngle = 90; 
				Cts.hrAngle = Cts.hrAngle  - (30*Cts.hour);
			}
			else{
				Cts.hrAngle = 360; 
				Cts.hrAngle = Cts.hrAngle  - (30*(Cts.hour-3)); 
			}

			 
		}

		public void setArcEnd(){
			Cts.scArcEnd = -(Cts.second*6);
			Cts.mnArcEnd = -(Cts.minute*6); 
			Cts.hrArcEnd = -(Cts.hour*30);
		}
	

	} 

	public static void main(String ar[]){
		createAndShowUI();

	} 

} 
