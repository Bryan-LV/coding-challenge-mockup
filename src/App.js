import { Payment, ProfileCard, Pricing } from './components'

function App() {
  return (
    <div className="md:flex md:flex-row-reverse md:justify-between md:items-stretch p-4 max-w-screen-lg mx-auto">
      <div className="">
        <ProfileCard
          username="Filip Martin Jose"
          city="Los Angeles"
          followerCount={980}
          projectsCount={142}
          rankCount={129}
          accountType="Pro Level" />

        <Pricing
          hourlyMin={20}
          hourlyMax={300}
          fixed={800} />
      </div>
      <Payment />
    </div>
  );
}

export default App;
