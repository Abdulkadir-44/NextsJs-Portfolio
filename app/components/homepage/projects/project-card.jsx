// @flow strict
"use client"
import React, { useState } from 'react';
import Modal from "./Modal"

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 pt-4 lg:pt-6">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
      {/* Resim Gör butonu */}
      <div className="flex justify-end px-4 pb-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-4 py-2 rounded-md shadow hover:scale-105 transition"
          onClick={() => setShowModal(true)}
        >
          Resim Gör
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Proje Görselleri
          </h2>

          <div className="flex flex-col gap-6 pb-4 px-2">
            {Array.isArray(project.image) && project.image.length > 0 ? (
              project.image.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[950px]  mx-auto h-[450px] rounded-lg overflow-hidden border border-gray-300 "
                >
                  <img
                    src={imgSrc}
                    alt={`Proje görseli ${idx + 1}`}
                    className={`${project.smallImage ? 'object-contain bg-gray-100' : 'object-cover'} w-full h-full`}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center w-full">Henüz görsel eklenmemiş.</div>
            )}
          </div>
        </Modal>
      )}

    </div>
  );
}

export default ProjectCard;