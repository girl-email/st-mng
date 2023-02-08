import React from 'react';
import { Switch } from 'antd';

const SwitchDark = () => {
	
	const onChange = (checked: boolean) => {
		console.log('11');
	};

	return (
		<Switch
			className="dark"
			defaultChecked={true}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

export default SwitchDark;
