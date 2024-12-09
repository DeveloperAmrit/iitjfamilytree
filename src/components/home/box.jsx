const Box = ({leader={},followers=[]}) => {

  const circleRadius = (22*followers.length>180)? 22*followers.length : 180 ; 

  return (
    <div>
      <div className="relative flex items-center justify-center w-full h-[600px]">
        <div className="absolute w-44 h-44 flex flex-col items-center justify-center bg-white text-black py-4 px-6 rounded-full text-xl">
          <span>{leader.name}</span>
          <span>{leader.roll}</span> 
        </div>
        <div className="text-3xl">Hello</div>
        <div className="absolute w-full h-full flex items-center justify-center">
          {followers.map((follower, index) => {
            // Calculate the angle for each follower based on their index
            const angle = (index / followers.length) * 2 * Math.PI; 
            const x = circleRadius * Math.cos(angle); // X position based on angle
            const y = circleRadius * Math.sin(angle); // Y position based on angle

            return (
              <div
                key={follower.id}
                className="absolute w-32 h-32 flex flex-col items-center justify-center bg-red-500 text-white rounded-full text-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)', // Center the follower element
                }}
              >
                <span>{follower.name}</span>
                <span>{follower.roll}</span> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Box;
