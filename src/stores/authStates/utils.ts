// IMPORTED ASSETS
import AvatarZeroImage from '$assets/avatars/0.png';
import AvatarOneImage from '$assets/avatars/1.png';
import AvatarTwoImage from '$assets/avatars/2.png';
import AvatarThreeImage from '$assets/avatars/3.png';
import AvatarFourImage from '$assets/avatars/4.png';
import AvatarFiveImage from '$assets/avatars/5.png';
import AvatarSixImage from '$assets/avatars/6.png';
import AvatarSevenImage from '$assets/avatars/7.png';
import AvatarEightImage from '$assets/avatars/8.png';
import AvatarNineImage from '$assets/avatars/9.png';

// STATES
const avatars = [
	AvatarZeroImage,
	AvatarOneImage,
	AvatarTwoImage,
	AvatarThreeImage,
	AvatarFourImage,
	AvatarFiveImage,
	AvatarSixImage,
	AvatarSevenImage,
	AvatarEightImage,
	AvatarNineImage
];

// UTILS
export const getAvatar = (index: number) => {
	if (index < 0 || index > 9) throw new Error('Invalid avatar index!');
	return avatars[index];
};
export const initializeAuthStates = () => {};
