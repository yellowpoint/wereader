// @ts-nocheck
import $, { param } from 'jquery';
import React, { useState } from "react"
import { createRoot } from 'react-dom/client';
import { Input, Space, Select, Button, Form } from 'antd'

const emitEvent = (element: any, val: string) => {
	element.dispatchEvent(new Event('input', { bubbles: true }));
	element.dispatchEvent(new Event('change', { bubbles: true }));
}

const ModevolTags = () => {
	const [tagData, _setTagData] = useState({
		tag: '#d',
		custom: '',
		summary: '',
		relation: ''
	});
	const setTagData = (params: any = {}) => {
		_setTagData(e => ({ ...e, ...params }))
	}
	const isC = tagData.tag === '#c'
	const onSave = () => {
		const {
			tag,
			custom,
			summary,
			relation
		} = tagData
		let val = ''
		val += ' ' + tag
		if (isC && custom) val += ' ' + custom
		if (summary) val += ' ' + summary
		if (relation) val += ' ' + relation

		document.querySelector('.toolbarItem.review').click()

		const $WriteBookReview = document.querySelector('#WriteBookReview')
		$WriteBookReview.value = val
		emitEvent($WriteBookReview, val)

		setTimeout(() => {
			$('.writeReview_submit_button')?.[0]?.click?.()
		}, 300)


	}
	return <>
		<Space onClick={(e) => e.stopPropagation()} style={{ padding: '0 10px 10px 10px' }}>
			<Select
				defaultValue={tagData.tag}
				onChange={e => setTagData({ tag: e })}
				options={[
					{ value: '#d', label: '#d' },
					{ value: '#e', label: '#e' },
					{ value: '#t', label: '#t' },
					{ value: '#c', label: '#c' },
				]}
			></Select>
			{isC && <Input style={{ width: '6em' }} placeholder="自定义" onChange={e => setTagData({ custom: e.target.value })}></Input>}
			<Input style={{ width: '8em' }} placeholder="总结最多六字" onChange={e => setTagData({ summary: e.target.value })} ></Input>
			<Input style={{ width: '8em' }} placeholder="关联" onChange={e => setTagData({ relation: e.target.value })}></Input>
			<Button type="primary" onClick={onSave}>确定</Button>
		</Space>

	</>
}




export const addModevolTags = () => {
	let container = $('.reader_toolbar_container');

	$('.reader_toolbar_itemContainer.ModevolTags').remove()

	if (container.find('.ModevolTags').length) return

	var $chatDiv = $("<div class='reader_toolbar_itemContainer ModevolTags'>");
	container.append($chatDiv)

	createRoot($chatDiv[0]).render(<ModevolTags />);
}
