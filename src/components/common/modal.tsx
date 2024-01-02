'use client'

import { Calendar } from "@mantine/dates"
import { RegistrationButton } from "./registration-button"

import { MantineProvider } from '@mantine/core';
import StudyTimeSelect from "./time-select";

// エラー画面
const Modal = () => {
  return (
    <section className="h-full">
      <div className="h-4/5 flex justify-between">
        <div className="w-1/2 flex-col justify-between flex">
          <div className="h-1/3">
            <legend>学習日</legend>
            <input type="date" className="outline outline-gray-300"/>
          </div>
          <div className="h-1/3">
            <legend>学習コンテンツ</legend>
            <select name="example" className="outline outline-gray-300">
              <option>選択肢のサンプル1</option>
              <option>選択肢のサンプル2</option>
              <option>選択肢のサンプル3</option>
              <option>選択肢のサンプル4</option>
              <option>選択肢のサンプル5</option>
            </select>
          </div>
          <div className="h-1/3">
            <legend>学習言語</legend>
            <select name="example" className="outline outline-gray-300">
              <option>選択肢のサンプル1</option>
              <option>選択肢のサンプル2</option>
              <option>選択肢のサンプル3</option>
              <option>選択肢のサンプル4</option>
              <option>選択肢のサンプル5</option>
            </select>
          </div>
        </div>
        <div className="w-1/2">
          <div className="h-1/2">
            <legend >学習時間</legend>
            <StudyTimeSelect />
          </div>
          <div className="1/2">
            <legend className="study_title">Line用コメント</legend>
            <textarea name="" id="" cols="40" rows="8" className="outline outline-gray-300"></textarea>
          </div>
        </div>
      </div>
      <div className="justify-center flex pt-4">
        <RegistrationButton />
      </div>
    </section>
  )
}

export default Modal