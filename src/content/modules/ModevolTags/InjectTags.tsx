// @ts-nocheck
import $, { param } from 'jquery';
import React, { useState } from "react"
import { createRoot } from 'react-dom/client';
import { Tag, Space, Select, Button, Form } from 'antd'
// import { getThoughtsInAChap } from '../../../background/modules/bg-popup'
import {
	bg,
} from '../../../popup/modules/popup-utils';
const emitEvent = (element: any, val: string) => {
	element.dispatchEvent(new Event('input', { bubbles: true }));
	element.dispatchEvent(new Event('change', { bubbles: true }));
}

const InjectTag = () => {
	// const [tagData, _setTagData] = useState({
	// 	tag: '#d',
	// 	custom: '',
	// 	summary: '',
	// 	relation: ''
	// });
	// const setTagData = (params: any = {}) => {
	// 	_setTagData(e => ({ ...e, ...params }))
	// }
	// const isC = tagData.tag === '#c'

	return <span style={{
		position: 'absolute',
		transform: 'translateX(-110%)'
	}}>
		<Tag color="#f50">#f50</Tag>
	</span>
}




export const addInjectTags = async () => {
	let wr_underline_wrapper = $('.wr_underline_wrapper');
	let wr_highlight_bg = $('.wr_highlight_bg');
	// const thoughtsInAChap = await bg.getThoughtsInAChap()
	// console.log('thoughtsInAChap', thoughtsInAChap);

	// $('.reader_toolbar_itemContainer.ModevolTags').remove()

	var $chatDiv = $("<span>");
	// container.append($chatDiv)
	wr_underline_wrapper.eq(0).append($chatDiv)

	createRoot($chatDiv[0]).render(<InjectTag />);
}
