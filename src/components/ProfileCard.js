import profilePhoto from '../assets/profile-photo.jpg';
import coverPhoto from '../assets/cover-photo.jpg';

function ProfileCard({ username, city, followerCount, projectsCount, rankCount, accountType }) {

  return (
    <div className="rounded-lg max-w-sm bg-white p-1 mx-auto">
      <div className="">
        <div className="h-32 overflow-hidden rounded-t-md">
          <img className="w-full" src={coverPhoto} alt="cover" />
        </div>
        <div className="h-24 w-24 rounded-full overflow-hidden mx-auto transform -translate-y-16 border-4 border-white border-solid">
          <img className=" max-w-full overflow-hidden" src={profilePhoto} alt="profile" />
        </div>
      </div>
      <div className="mx-auto text-center -mt-16">
        <h2 className="heading">{username}</h2>
        <h4 className=" text-gray-600">{city}</h4>
        <h4 className="mt-4 bg-primary-900 inline-block px-6 py-3 rounded-full leading-3 text-gray-100 tracking-wide text-sm">{accountType}</h4>
      </div>
      <div className="flex-between-start p-8 px-6">
        <div className="">
          <h4 className="profile-stats-title">Followers</h4>
          <h4 className="profile-stats">{followerCount}</h4>
        </div>
        <div className="">
          <h4 className="profile-stats-title">Projects</h4>
          <h4 className="profile-stats">{projectsCount}</h4>
        </div>
        <div className="">
          <h4 className="profile-stats-title">Rank</h4>
          <h4 className="profile-stats">{rankCount}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
